import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Filter from "../../components/Filter";

const ListPostPage = () => {
  //   const posts = useLoaderData();
  const data = useLoaderData();

  return (
    <div className="list-page">
      <div className="container">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error Loading Posts!</p>}
            >
              {(postResponse) => {
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ));
              }}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ListPostPage;
