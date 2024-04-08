import Position from "./position";

export default function Positions() {
  return (
    <div className="py-10 md:py-20 bg-white text-black px-2 sm:px-8 md:px-16 lg:px-36">
      {roles.map((role, index) => (
        <Position role={role.role} name={role.name} key={index} />
      ))}
    </div>
  );
}

const roles: Array<{ role: string; name: string }> = [
  { name: "Design", role: "Product Designer" },
  { name: "Software Development", role: "Engineering Manager" },
  { name: "Customer Success", role: "Customer Success Manager" },
  { name: "Sales", role: "Account Executive" },
  { name: "Marketing", role: "SEO Marketing Manager" },
];
