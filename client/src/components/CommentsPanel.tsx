import { useState, type FormEvent } from "react";
import { MessageCircle, Send, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useLanguage, languageCopy } from "@/contexts/LanguageContext";

type CommentType = "tool" | "skill" | "workflow" | "ui-guide" | "k-skill";

export default function CommentsPanel({ contentType, contentKey }: { contentType: CommentType; contentKey: string }) {
  const { language } = useLanguage();
  const copy = languageCopy[language];
  const { user, isAuthenticated } = useAuth();
  const [body, setBody] = useState("");
  const commentsQuery = trpc.comments.list.useQuery({ contentType, contentKey });
  const utils = trpc.useUtils();
  const createComment = trpc.comments.create.useMutation({
    onSuccess: async () => { setBody(""); await utils.comments.list.invalidate({ contentType, contentKey }); toast.success(language === "ko" ? "댓글을 저장했어요." : "Comment saved."); },
    onError: (error) => toast.error(error.message),
  });
  const deleteComment = trpc.comments.delete.useMutation({
    onSuccess: async () => { await utils.comments.list.invalidate({ contentType, contentKey }); toast.success(language === "ko" ? "댓글을 삭제했어요." : "Comment deleted."); },
    onError: (error) => toast.error(error.message),
  });
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = body.trim();
    if (!trimmed || createComment.isPending) return;
    createComment.mutate({ contentType, contentKey, body: trimmed });
  };
  return <section className="comments-panel" aria-labelledby={`comments-${contentType}-${contentKey}`}>
    <div className="comments-heading"><div><span className="section-kicker"><MessageCircle size={13} /> {copy.comments}</span><h4 id={`comments-${contentType}-${contentKey}`}>{language === "ko" ? "사용자 메모와 의견" : "Notes and comments"}</h4></div><span>{commentsQuery.data?.length ?? 0}</span></div>
    {isAuthenticated ? <form className="comment-form" onSubmit={submit}><label htmlFor={`comment-input-${contentKey}`}>{user?.name || (language === "ko" ? "로그인 사용자" : "Signed-in user")}</label><textarea id={`comment-input-${contentKey}`} value={body} onChange={(event) => setBody(event.target.value)} maxLength={2000} placeholder={language === "ko" ? "이 스킬을 사용해 본 경험이나 팁을 남겨보세요." : "Share an experience or tip about this skill."} /><button type="submit" disabled={!body.trim() || createComment.isPending}><Send size={14} /> {createComment.isPending ? "…" : copy.writeComment}</button></form> : <div className="comment-login-callout"><p>댓글 작성은 현재 공개 사이트에서 제공하지 않습니다. 필요한 내용은 메모장에 저장해 주세요.</p></div>}
    <div className="comment-list" aria-live="polite">{commentsQuery.isLoading ? <p className="comment-state">{language === "ko" ? "댓글을 불러오는 중…" : "Loading comments…"}</p> : commentsQuery.data?.length ? commentsQuery.data.map((comment) => <article className="comment-item" key={comment.id}><div><strong>{comment.authorName || (language === "ko" ? "익명 사용자" : "Anonymous user")}</strong><time dateTime={new Date(comment.createdAt).toISOString()}>{new Date(comment.createdAt).toLocaleDateString(language === "ko" ? "ko-KR" : "en-US")}</time></div><p>{comment.body}</p>{isAuthenticated && comment.userId === user?.id && <button type="button" className="comment-delete" onClick={() => deleteComment.mutate({ id: comment.id })} disabled={deleteComment.isPending} aria-label={language === "ko" ? "내 댓글 삭제" : "Delete my comment"}><Trash2 size={13} /></button>}</article>) : <p className="comment-state">{language === "ko" ? "아직 댓글이 없습니다." : "No comments yet."}</p>}</div>
  </section>;
}
