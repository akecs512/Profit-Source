/* eslint-disable react/prop-types */
function SkillsCard({ items }) {
  const { icons } = items;

  return (
    <>
      <div className="flex">
        {icons.map((icon, index) => (
          <img
            className="h-20 p-2"
            src={icon.path}
            alt={icon.alt}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
export default SkillsCard;
