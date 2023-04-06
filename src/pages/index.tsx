import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "@/utils/api";
import BaseLayout from "@/components/layout/BaseLayout";
import HomeLeftSidebar from "@/components/asides/HomeLeftSidebar";
import HomeRightSidebar from "@/components/asides/HomeRightSidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techdiary</title>
        <meta name="description" content="Techdiary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout
        LeftSidebar={<HomeLeftSidebar />}
        RightSidebar={<HomeRightSidebar />}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.
          Consequatur, vel earum. Repudiandae ullam magni veritatis, vero ea
          vitae est aperiam? Est quae, eligendi ipsa veritatis quisquam delectus
          nam sequi, veniam architecto ipsum optio mollitia accusantium fuga
          rerum asperiores numquam ad expedita nostrum neque! Libero eum quaerat
          in praesentium at, molestias temporibus! Aliquid sed, quam distinctio
          quos possimus expedita sit omnis perspiciatis hic laborum inventore!
          Inventore cupiditate quo ipsam laborum facere et sequi doloremque id
          impedit ea, aspernatur esse quos officia! Possimus pariatur placeat,
          laborum cupiditate neque dolores voluptatum fuga qui itaque distinctio
          ex iure odit quo maiores laboriosam quisquam sunt mollitia error nemo
          fugit sapiente rerum illum? Cupiditate optio repellendus in eos
          deleniti tempora fugiat neque, officia architecto blanditiis ad,
          voluptatem maxime veniam harum eius saepe! Neque debitis aut
          repudiandae obcaecati officiis, velit consequuntur aspernatur unde
          praesentium ad optio, et nesciunt eos quia ab eum assumenda delectus.
          Sed quo quod est beatae quaerat distinctio, odit excepturi repellat
          nemo! Cum fugit provident eligendi quidem ullam ab repellat enim, in
          pariatur voluptatum perferendis optio. Quaerat officia, et aut
          veritatis provident vitae placeat rerum quasi unde nobis sunt ipsa
          nesciunt facere corporis! Excepturi, eveniet, reiciendis aliquid eum
          sunt laborum aspernatur amet ipsum, modi sapiente id quis magni nulla.
          Inventore obcaecati enim nostrum id exercitationem consequatur commodi
          molestias ducimus voluptate eveniet consectetur fugiat quae possimus
          numquam magni dolores asperiores, rem distinctio ullam recusandae
          voluptatem quam dolorem nihil fuga. Perferendis quaerat placeat
          dolores nesciunt at reiciendis expedita atque qui ex enim consequatur,
          aut culpa nostrum architecto tenetur velit! Tempore consequuntur odio
          velit repellat culpa vero. Officiis fugit et facere minus enim sunt
          explicabo rerum ipsam, minima odit at consequatur obcaecati animi
          neque accusamus beatae placeat. Architecto quam molestiae velit
          exercitationem rem vel aut molestias maxime dolore voluptatum
          veritatis sit voluptatem nam vero dicta tempore, autem dignissimos
          asperiores nostrum numquam temporibus voluptatibus consectetur. Quam
          dolorum voluptatum dolorem recusandae magni id reiciendis assumenda.
          Soluta quam quisquam rerum architecto, voluptates facilis laborum ut
          maxime sapiente saepe possimus sequi asperiores velit deserunt, culpa
          praesentium, officiis reprehenderit ratione veritatis ipsam. Nam dolor
          quaerat veritatis officia dolorem dicta non beatae minus eveniet,
          excepturi dignissimos quidem nobis praesentium commodi consequuntur
          perferendis fuga, vero id similique est provident necessitatibus nemo
          facere suscipit. Labore magni ipsa quae facilis non consectetur qui.
          Dolore quaerat expedita distinctio totam dignissimos numquam modi
          voluptatum atque. Praesentium nobis consequatur laudantium molestias,
          vitae in sequi magni officiis eum maiores neque reiciendis quos
          exercitationem, similique error cumque id dolor cum soluta
          voluptatibus a voluptas? Distinctio ullam at consectetur illo dolorem
          ea quia nisi aperiam officiis numquam, asperiores repellat tempore
          maiores explicabo dignissimos tenetur, atque itaque. Aut ipsum rerum
          aspernatur dolorem, repellendus dolorum optio provident dolor quia,
          natus dolore dignissimos repudiandae reiciendis exercitationem
          voluptas ad magni, alias velit harum consequatur assumenda aliquid
          nihil dicta! Eaque optio fugiat quidem autem, cumque error, eligendi
          consequuntur beatae officia temporibus odit unde exercitationem
          dignissimos at, nostrum perspiciatis. Tempora numquam rem, dolore
          itaque excepturi qui eaque dolor praesentium quae, ducimus sequi ex
          soluta dicta dolorum!
        </p>
      </BaseLayout>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-2xl text-center text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="px-10 py-3 font-semibold text-white no-underline transition rounded-full bg-white/10 hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
