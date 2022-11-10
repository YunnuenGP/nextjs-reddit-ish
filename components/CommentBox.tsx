import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface CommentFormData {
  comment: string;
}

function CommentBox() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormData>();

  const onSubmitHandler = handleSubmit(async (formData) => {
    const toastId = toast.loading('Posting your comment...');

    setTimeout(() => {
      console.log(formData);
      setValue('comment', '');
      toast.success('Comment Posted!', {
        id: toastId,
      });
    }, 1000);
  });

  return (
    <>
      <p className="text-sm">
        Comment as <span className="cursor-pointer hover:underline">Local-hoster</span>
      </p>

      <form onSubmit={onSubmitHandler} className="flex flex-col">
        <textarea
          {...register('comment', { required: true })}
          name="comment"
          className="h-28 rounded-t-md border border-b-0 border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
          placeholder="What are your thoughts?"
        ></textarea>

        <div className="flex h-10 items-center justify-end border border-t-0 border-gray-200 bg-gray-100">
          <button
            type="submit"
            className="text-white text-sm font-semibold px-4 py-1 mr-2 rounded-full bg-gray-800"
          >
            Comment
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentBox;
