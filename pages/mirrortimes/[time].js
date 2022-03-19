import { useRouter } from "next/router";
import Mirror from "../../components/mirror";

export default function Time() {
  const router = useRouter();
  const { time } = router.query;
  return (
    <div>
      <Mirror time={time} />;
    </div>
  );
}
