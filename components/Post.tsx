import React from 'react';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import Avatar from './Avatar';
import TimeAgo from 'react-timeago';

interface Post {
  created: string;
  id: string;
  title: string;
  selftext: string;
  url: string;
  author: string;
  score: number;
  num_comments: number;
  subreddit: string;
  post_hint: string;
  permalink: string;
}

interface PostProps {
  post: Post;
  children?: React.ReactNode;
}

function Post({ post, children }: PostProps) {
  const date = new Date();
  date.setTime(Number(post.created) * 1000);

  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="flex rounded-md border border-gray-300 bg-white shadow-sm hover:border-gray-600">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start py-2 px-1 space-y-1 rounded-l-md bg-gray-50 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-black text-xs font-bold">{formatter.format(post.score)}</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
      </div>

      <div className="p-3 pb-1">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <Avatar name={post.author} />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">
              {post.subreddit}
            </span>{' '}
            • Posted by u/{post.author} <TimeAgo date={date.toString()} />
          </p>
        </div>

        {/* Body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.selftext}</p>
        </div>

        {/* Image */}
        {post.post_hint === 'image' ? (
          <img className="w-full" src={post.url} alt="Post Image" />
        ) : (
          <div>
            <p>{`${post.post_hint}: ${post.url}`}</p>
          </div>
        )}

        {/* Footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatBubbleLeftIcon className="h-6 w-6" />
            <p>
              {post.num_comments}
              <span className="hidden min-[450px]:inline"> Comments</span>
            </p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden md:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden md:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden md:inline">Save</p>
          </div>
          <div className="postButtons">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
        </div>

        {/* CommentBox or children components */}
        {children && <div className="py-4">{children}</div>}
      </div>
    </div>
  );
}

export default Post;
