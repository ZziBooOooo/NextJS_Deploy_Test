import React from "react";
// import { signIn } from "next-auth/react";
import { getProviders, signIn, getSession } from "next-auth/react";

const signin = ({ providers }) => {
  console.log(providers);
  return (
    <>
      <div>signin</div>
      signin 페이지 디자인
      {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
    </>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  return {
    props: {
      providers: await getProviders(),
    },
  };
}

export default signin;
