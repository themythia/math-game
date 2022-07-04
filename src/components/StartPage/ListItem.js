const ListItem = ({ text, value, type }) => {
  return (
    <li
      className={`flex flex-row justify-center text-64 mb-[47px] last:mb-0 ${
        type === 'final' && 'lg:text-64 text-52'
      }`}
    >
      <p className='mr-2'>{text}</p>
      <p>{value}</p>
    </li>
  );
};
export default ListItem;
