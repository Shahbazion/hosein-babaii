"use client";

type Comment = {
  id: string;
  name: string;
  comment: string;
  createdAt: string; // ISO string
};

type CommentListProps = {
  comments: Comment[];
};

export default function CommentList({ comments }: CommentListProps) {
  if (!comments.length) {
    return (
      <p className="text-sm text-[var(--text-muted)] mt-10">
        هنوز دیدگاهی ثبت نشده.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-12">
      {comments.map((c) => (
        <div
          key={c.id}
          className="
            p-5 rounded-xl
            bg-[var(--bg-elevated)]/60 backdrop-blur-xl
            border border-[var(--border)]
            shadow-sm
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--text)]">
              {c.name}
            </span>

            <span className="text-xs text-[var(--text-muted)]">
              {new Date(c.createdAt).toLocaleDateString("fa-IR")}
            </span>
          </div>

          {/* Comment Text */}
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {c.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
