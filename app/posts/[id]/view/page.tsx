import Display from '@/app/ui/posts/post-display';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchUserIdByNameEmail, fetchPostById, fetchLikeStatus } from '@/app/lib/data';
import { auth, signIn } from '@/auth';

export default async function Page({ params }: { params: { id: string } }) {
  // get user id
  const user = await auth();
  const userName = user?.user?.name;
  const userEmail = user?.user?.email;
  if (userName === undefined || userEmail === undefined) {
    signIn();
  }
  const userId = await fetchUserIdByNameEmail(
    String(userName),
    String(userEmail),
  );

  // get post id
  const id = params.id;
  const post = await fetchPostById(id);

  // get like status
  const likeStatusRes = await fetchLikeStatus(id, userId);
  var likeStatus = false;
  if (likeStatusRes == 1) {
    likeStatus = true;
  } else {
    likeStatus = false;
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Posts', href: '/posts' },
          {
            label: 'View Post',
            href: `/posts/${id}/view`,
            active: true,
          },
        ]}
      />
      <p>Hey this is app\</p>
      <Display post={post} userId={userId} likeStatus={likeStatus}/>
    </main>
  );
}
