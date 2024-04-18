import contractBasic from '@/_lib/contractBasic';
import Landing from '@/components/Landing';

export default function Home() {
  contractBasic();
  return (
    <div>
      <Landing />
    </div>
  );
}
