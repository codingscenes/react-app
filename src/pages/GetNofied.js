import GetNotifiedForNewUser from '../components/GetNotifiedForNewUser';

const GetNofied = () => {
  return (
    <>
      <h1> Get notified 🔔 when user is added! </h1>
      <GetNotifiedForNewUser />
    </>
  );
};
export default GetNofied;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');
  // skipping backend request;
  return { message: 'Congrats! You will be notified!' };
}
