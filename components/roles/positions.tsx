import Container from "../container";
import Position from "./position";

export default function Positions() {
  return (
    <Container className="bg-white text-black flex flex-col gap-5">
      {roles.map((role, index) => (
        <Position role={role.role} name={role.name} key={index} />
      ))}
    </Container>
  );
}

const roles: Array<{ role: string; name: string }> = [
  { name: "Design", role: "Product Designer" },
  { name: "Software Development", role: "Engineering Manager" },
  { name: "Customer Success", role: "Customer Success Manager" },
  { name: "Sales", role: "Account Executive" },
  { name: "Marketing", role: "SEO Marketing Manager" },
];
