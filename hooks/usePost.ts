import { useQuery } from 'react-query';
import * as api from '../api/posts';

export const usePost = (id: string, url: string, options?: any) => {
    return useQuery(['post', id], () => api.fetchPost(url), options);
}