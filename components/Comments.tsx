import React from 'react';
import Avatar from './Avatar';
import TimeAgo from 'react-timeago';

interface Comments {
  comments: Comment[];
}

interface Comment {
  created: string;
  id: string;
  author: string;
  body: string;
  data: any;
  replies: any;
  kind: string;
}

function Comment(comment: Comment) {
  if (!comment?.body) return null;

  const children = comment.replies?.data?.children;
  const date = new Date();
  date.setTime(Number(comment.created) * 1000);

  return (
    <div className="relative flex flex-col items-start mt-7">
      <hr className="absolute top-2 left-5 z-0 h-full border" />

      <div className="flex flex-1 flex-shrink-0 z-10 space-x-2">
        <div>
          <Avatar name={comment.author} />
        </div>
        <div className="flex flex-col">
          <p className="py-2 text-xs text-gray-400">
            <span className="font-semibold text-gray-600">{comment.author + ' '}</span>
            <TimeAgo date={date} />
          </p>
          <p className="break-all">{comment.body}</p>
        </div>
      </div>

      {/* nested comments */}
      {children && (
        <div className="pl-6">
          <Comments comments={children} />
        </div>
      )}
    </div>
  );
}

const Comments = ({ comments }: Comments) => {
  const nestedComments = comments.map((comment) => {
    const _comment = comment.data || comment;
    return <Comment key={_comment.id} {..._comment} />;
  });

  return <>{nestedComments}</>;
};

export default Comments;
