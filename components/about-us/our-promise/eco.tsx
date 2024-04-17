import ExportedImage from "next-image-export-optimizer";
import ecoImg from "@/public/images/eco-c.png";

export default function Eco() {
  return (
    <div className="flex items-start gap-4 px-2">
      <ExportedImage
        src={ecoImg}
        width={80}
        height={80}
        alt={"we are environmentally conscious"}
      />

      <div>
        <div className="mb-4 text-2xl font-semibold">Environmental impact</div>
        <div className="text-lg">
          Join us in making a positive impact on the environment. Every charge
          with us contributes to a more sustainable future.
        </div>
      </div>
    </div>
  );
}
