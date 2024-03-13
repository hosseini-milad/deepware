import Carousel from '../../../components/Carousel/Carousel';
import ServerStatus from './ServerStatus';
import mocks from './mocks.json';

export default function ServerStatusPane({ data, className }) {
  const Slides = mocks.map((data) => <ServerStatus data={data} />);

  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <Carousel slides={Slides}></Carousel>
      </div>
    </div>
  );
}
