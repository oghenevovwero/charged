import { availableRoles } from "@/data/roles";
import Container from "../container";
import Position from "./position";

export default function Positions() {
  return (
    <Container className="flex flex-col gap-5 bg-white text-black">
      {availableRoles.map((role, index) => (
        <Position role={role.role} name={role.name} key={index} />
      ))}
    </Container>
  );
}
