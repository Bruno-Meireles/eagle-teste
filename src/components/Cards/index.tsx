interface ICardProps {
  description: string;
}

const Cards = ({ description }: ICardProps) => {
  return (
    <article className="w-20 h-20 flex justify-center items-center rounded-xl border-2 border-blue-500">
      <h2>{description}</h2>
    </article>
  );
};

export default Cards;
