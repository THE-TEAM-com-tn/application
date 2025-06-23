import { useParams } from 'react-router-dom';

export default function Page() {
  const { id } = useParams();
  return <h1>Page {id}</h1>;
}
