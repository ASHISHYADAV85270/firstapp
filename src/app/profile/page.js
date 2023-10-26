import Link from "next/link";
const Profile = () => {
  return (
    <div>
      <div>Profile</div>
      <Link href={"/profile/teacher"}>Teacher</Link>
      <br />
      <Link href={"/profile/student"}>Student</Link>
      <br />
    </div>
  );
};

export default Profile;
