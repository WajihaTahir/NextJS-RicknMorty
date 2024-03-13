type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const idPage = async ({ params }: Props) => {
  const { id } = params;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const result = await response.json();
  return (
    <div>
      <h5>
        <b>Name: </b>
        {result.name}
      </h5>
      <img src={result.image} alt={result.name}></img>
      <h5>
        <b>Species: </b>
        {result.species}
      </h5>
      <h5>
        <b>Status: </b>
        {result.status}
      </h5>
    </div>
  );
};
export default idPage;
