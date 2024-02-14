import Button from "@/styles/styled-comp/Button";

export default function ButtonComp() {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="font-bold text-xl mb-2 text-center">
          Button Components
        </h3>
        <div className="lg:flex grid grid-cols-2 items-center justify-center gap-2 mb-4">
          <Button default_1>Button</Button>
          <Button default_2>Button</Button>
          <Button default_3>Button</Button>
          <Button default_4>Button</Button>
          <Button default_5>Button</Button>
        </div>
      </div>
    </>
  );
}
