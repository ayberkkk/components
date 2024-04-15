import tw, { styled } from "twin.macro";

const TestimonialsCard = styled.div`
  ${tw`w-full relative overflow-hidden cursor-pointer`}
  ${(props) => props.default_1 && tw`bg-white h-full bg-opacity-60 border rounded-3xl p-6`}
  ${(props) => props.default_2 && tw`px-4 h-[600px]`}
`;

export default TestimonialsCard;
