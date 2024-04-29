export interface PostProps {
  author: string;
  authorImage: string;
  timeAgo: string;
  edited?: boolean;
  emoji: string;
  content: string;
  commentsCount?: number;
}
