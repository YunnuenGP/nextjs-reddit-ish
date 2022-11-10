import React from 'react';
import Avatar from './Avatar';
import { PhotoIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface PostFormData {
  postTitle: string;
  postSelftext: string;
  postImage: string;
  subreddit: string;
}

function PostBox() {
  const [imageBoxOpen, setImageBoxOpen] = React.useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PostFormData>();

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
    setValue('postTitle', '');
    setValue('postSelftext', '');
    setValue('subreddit', '');
    setValue('postImage', '');
    setImageBoxOpen(false);
    toast.success('New Post Created!');
  });

  return (
    <form
      onSubmit={onSubmit}
      className="sticky top-14 z-50 mt-5 bg-white rounded-md border border-gray-300 p-2"
    >
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          type="text"
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          placeholder="Create Post"
        />

        <PhotoIcon
          onClick={() => setImageBoxOpen((prev) => !prev)}
          className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`}
        />
        <LinkIcon className={`h-6 cursor-pointer text-gray-300`} />
      </div>

      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          {/* Body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body</p>
            <input
              {...register('postSelftext')}
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              type="text"
              placeholder="Text (optional)"
            />
          </div>

          {/* Subreddit */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit</p>
            <input
              {...register('subreddit', { required: true })}
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              type="text"
              placeholder="i. e. reactjs"
            />
          </div>

          {/* Image */}
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image url</p>
              <input
                {...register('postImage')}
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                type="text"
                placeholder="Optional url..."
              />
            </div>
          )}

          {/* Errors */}
          {errors.subreddit && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.subreddit.type === 'required' && <p>- A Subreddit is required</p>}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="w-full rounded-full bg-blue-400 p-2 mt-2 text-white">
            Create Post
          </button>
        </div>
      )}
    </form>
  );
}

export default PostBox;
