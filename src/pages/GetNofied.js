import GetNotifiedForNewUser from '../components/GetNotifiedForNewUser';

const GetNofiedPage = () => {
  return (
    <>
      <h1> Get notified 🔔 when user is added! </h1>
      <GetNotifiedForNewUser />
    </>
  );
};
export default GetNofiedPage;

export async function action({ request }) {
  console.log('loading');
  const data = await request.formData();
  const email = data.get('email');
  // skipping backend request;
  return { message: 'Congrats! You will be notified!' };
}
