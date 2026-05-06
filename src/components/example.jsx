// import { useEffect, useRef, useState } from "react";

// export default function Example() {
//   const cards = [
//     { id: 1, name: "Total Students", count: 100 },
//     { id: 2, name: "Total Staffs", count: 50 },
//     { id: 3, name: "Total Buses", count: 10 },
//     { id: 4, name: "Total Class", count: 5 },
//   ];

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   //1.for now i considerd my cards is came from api..later stage i handle aync and all correctly

//   //   useEffect(() => {
//   //     const fetchCards = async () => {
//   //       try {
//   //         setLoading(true);
//   //         //now it' just data in feature i can implement api call here
//   //         setData(cards);
//   //       } catch (error) {
//   //         setError(error?.message);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };
//   //     fetchCards();
//   //   }, []);

//   const [search, setSearch] = useState([]);

//   const fn = async () => {
//     //as of now just give console
//     console.log("Search api called");
//   };

//   //each keystroke it's call the api
//   //   useEffect(() => {
//   //     fn();
//   //   }, [search]);

//   //debounce
//   //   const debounce = async (fn, delay) => {
//   //   };

//   //   let res = debounce(fn, 5000);

//   const timeRef = useRef(null);
//   const handleChange = (e) => {
//     setSearch(e.target.value);

//     if (timeRef) {
//       clearTimeout(timeRef.current);
//     }

//     timeRef.current = setTimeout(() => {
//       fn();
//     }, 8000);
//   };

//   return (
//     <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center p-6">
//       {loading && <p>Loading.....</p>}
//       {error && <p>error...{error}</p>}
//       {/* {data && data.length > 0 ? (
//         data.map((list) => (
//           <div
//             key={list.id}
//             className="bg-blue-400 text-white p-6 rounded-lg shadow-md w-full md:w-1/4 text-center"
//           >
//             <p className="text-lg font-semibold">{list.name}</p>
//             <p className="text-2xl font-bold">{list.count}</p>
//           </div>
//         ))
//       ) : (
//         <p>No data found</p>
//       )} */}
//       <input
//         type="text"
//         onChange={(e) => handleChange(e)}
//         value={search}
//         name="search"
//         id="search"
//         placeholder="search something..."
//       />
//     </div>
//   );
// }

export default function Throttling() {
  function handleScroll() {
    console.log("Scroll api called");
  }

  function throttle(fn, delay) {
    let last = 0;

    return function (...args) {
      const now = new Date().getTime();
      if (now - last >= delay) {
        last = now;
        fn.apply(this, args);
      }
    };
  }

  const throttling = throttle(handleScroll, 2000);

  //   window.addEventListener("scroll", handleScroll); // without throttling api called 300 times....
  window.addEventListener("scroll", throttling); //multiple time i scroll api called 6 time only

  return (
    <>
      <section>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        accusamus! Tempora, inventore. Necessitatibus temporibus ducimus laborum
        pariatur, consectetur totam eaque ex quaerat incidunt numquam et nemo?
        Excepturi ratione adipisci odio facilis repudiandae dicta dolor, ex
        voluptates tenetur nostrum, soluta eum velit totam eaque? Autem harum,
        nihil illum consequatur deleniti commodi in possimus ab, quae assumenda
        repellat aliquid hic veniam odio placeat laborum. Inventore nam a
        suscipit quaerat pariatur autem deleniti consectetur, incidunt modi
        rerum rem, cupiditate numquam dolorum. Odio perspiciatis quisquam
        eveniet sequi! Quo minima ut aliquam cum accusamus qui aspernatur optio
        pariatur esse molestiae doloremque debitis dolor facere incidunt porro
        beatae dicta quidem veritatis corrupti vero, ratione quam. Hic, iure
        adipisci quam assumenda nisi aliquam, numquam, accusamus praesentium
        libero eius sunt magni? Tempora accusantium, eaque minima quia similique
        voluptatum, facilis sequi sed totam quod fugit nostrum eveniet sint,
        consectetur excepturi veritatis est placeat ullam officiis sit debitis
        quas dolor! Consequuntur recusandae similique veniam et voluptatem
        minima doloremque. Est placeat a laudantium itaque ex temporibus
        perspiciatis corporis, quos non doloribus veritatis rem laborum officiis
        quidem. Neque accusamus illo, at sapiente, facilis, rem enim quam
        mollitia error illum totam suscipit nesciunt placeat sed earum?
        Perferendis temporibus cumque unde consequuntur est soluta molestias
        vitae magnam nisi aperiam? Consectetur enim esse perferendis, temporibus
        rerum optio fugit nesciunt tempora, natus placeat, sint aliquid non
        minima! Quidem cupiditate autem sequi, unde exercitationem perferendis,
        maxime officiis placeat ratione iure nesciunt quis corrupti in dicta,
        alias expedita incidunt beatae dolorum reprehenderit dolor. Non, illo. A
        ab doloribus fugit odio vitae incidunt harum sit tempora esse autem
        ratione dolore, blanditiis magnam soluta sapiente cum reiciendis
        dignissimos voluptates temporibus eaque tempore? Aperiam quaerat sed
        sequi magni molestiae error cum ipsa? Nam hic quae similique.
        Repudiandae optio iure laboriosam reprehenderit illo esse recusandae
        accusantium aperiam doloremque, incidunt autem impedit voluptates
        voluptate adipisci sequi voluptatibus minus dolorem perferendis itaque
        deserunt enim qui, quam tempora! At dolorum, cumque repudiandae totam
        nulla laboriosam repellat nam quisquam consequuntur, neque adipisci
        asperiores possimus, dolores laborum. Pariatur aliquid illum culpa
        tempora eligendi sint eius doloribus cumque, dolore qui corporis et
        similique? Laborum esse dolore cumque dolorem, fuga non adipisci
        pariatur? Nostrum optio molestiae quisquam similique officiis id nemo at
        dolores ab! Debitis omnis deleniti, obcaecati ad neque numquam, veniam
        illo adipisci amet repellat ea doloribus totam explicabo saepe quibusdam
        nemo enim error libero pariatur magni reiciendis ullam nisi, nesciunt
        ipsum! Voluptatum id eaque nam deleniti quibusdam ab dolores voluptas
        quas facere ipsum ratione quaerat maxime hic, quos laudantium eveniet
        asperiores sunt rerum quisquam accusantium accusamus magnam? Fuga iste
        animi, labore odit inventore soluta repellendus ex facere id impedit
        assumenda, optio accusantium iure eaque! Harum minima ipsum quaerat
        assumenda beatae quam necessitatibus at, veritatis, magnam maiores vel
        quos accusamus delectus reiciendis expedita fugit laboriosam voluptas
        reprehenderit dicta velit officia consectetur? Maiores nisi explicabo
        assumenda ea. Voluptatem ratione tempora minima nisi saepe ex eos
        itaque, voluptate asperiores deserunt ullam aliquid. Nobis obcaecati,
        facilis sint facere nisi deserunt vero voluptatum aspernatur
        praesentium, dolores recusandae expedita suscipit? Reprehenderit vero
        quisquam doloribus nam vitae voluptatem, iste laborum numquam ipsum
        eveniet. Dignissimos omnis aperiam, voluptas accusamus modi alias
        temporibus, distinctio consectetur obcaecati illo dolores deserunt
        officiis, voluptatem quo dolore culpa ipsa eius. Soluta perspiciatis
        aliquid nemo exercitationem consequatur, corrupti assumenda voluptatem,
        aperiam placeat, nisi sint? Omnis libero reprehenderit autem quod
        deleniti pariatur corporis fugiat aperiam sequi ab voluptas,
        praesentium, magnam eveniet aliquid? Suscipit odit mollitia sed sit
        consequatur necessitatibus exercitationem a illum maxime quae eveniet
        vel corrupti voluptatibus, illo, libero labore dolorum deserunt, ab
        nobis nulla dicta aut iste numquam! Soluta dolor, quo fugiat incidunt
        quia, quaerat consequuntur autem provident voluptas tempora aliquam
        dignissimos iure quis impedit illum exercitationem natus voluptate,
        maxime ipsum ex quasi repellat esse eum repellendus. Architecto, ab
        maxime sint quasi eaque accusantium omnis reprehenderit ratione porro
        quas error corrupti tempora distinctio sit modi doloribus numquam
        ducimus perferendis ex molestiae veritatis. Enim, hic provident nesciunt
        sequi fugiat ducimus nihil commodi? Excepturi aut aliquam hic eligendi
        ex debitis at laudantium. Est ex in provident illo veniam doloremque
        reiciendis accusamus suscipit voluptates obcaecati quis, itaque harum
        aspernatur ut error fugiat, deserunt dicta quasi quo maiores, asperiores
        velit nostrum. Dolor soluta molestiae quae repudiandae. A aliquid minus
        quisquam error consectetur reprehenderit iusto blanditiis ad ex facilis
        deleniti quis vel esse commodi, harum repellat nihil, possimus, ratione
        iure saepe sit labore assumenda rem pariatur. Dolores consectetur,
        accusamus unde eaque assumenda tempora officia dicta porro corrupti ut
        pariatur ipsa eius excepturi voluptas ab aliquid, provident voluptatum
        veritatis sapiente atque voluptate libero? Fugiat officiis quidem animi?
        Magni deleniti, molestias illo nemo dolor tempore est tempora sint aut
        impedit ea voluptas modi delectus sequi. Voluptas ad numquam eligendi
        quam qui deleniti autem, expedita alias perspiciatis minus quo rerum
        dolorem deserunt illum cupiditate laboriosam odit reiciendis in tempore
        tempora obcaecati voluptate. Quo voluptatem nihil eligendi excepturi,
        distinctio sed consequatur iste reiciendis aut eius dolore a amet at
        odit velit earum doloremque. Quia, cupiditate non! Voluptates veritatis
        facilis nemo fugiat quas provident voluptatum. Mollitia aliquid
        voluptatem voluptatum ex qui ad deserunt sint rerum quasi architecto
        ratione soluta quam ipsa harum ipsum tempora molestiae, velit est
        doloribus. Quos doloremque corporis laboriosam qui culpa. Deserunt
        debitis officia ab cum, similique, aperiam veritatis earum laborum atque
        pariatur facere maiores dolorum voluptas aliquid odit quo vero. Vel,
        ipsa est quidem, eveniet doloremque temporibus veritatis perferendis rem
        nulla sint, non amet libero magnam quae! Omnis accusamus deleniti
        eveniet labore assumenda! Mollitia qui aut molestiae esse quod? Deserunt
        cupiditate deleniti aperiam voluptatibus fugit repellat impedit neque
        modi ipsam, adipisci laudantium quos quam corporis debitis.
        Reprehenderit numquam recusandae voluptatibus illo nobis, vel eum optio
        libero natus pariatur vitae ipsam ipsum possimus assumenda voluptates
        incidunt. Quidem accusamus suscipit, explicabo sed laboriosam adipisci,
        officia iste modi tempore, accusantium ab est sequi quis? Error,
        laboriosam? Cumque placeat omnis exercitationem error reiciendis
        asperiores, libero molestias neque architecto dolorum. Labore, tempora
        minus, cupiditate error enim totam repudiandae est eos doloribus unde
        incidunt accusantium! Quisquam odio, autem quam optio aperiam
        necessitatibus dolor fugiat quos doloribus explicabo aliquam quod
        provident quibusdam id.
      </section>
    </>
  );
}
