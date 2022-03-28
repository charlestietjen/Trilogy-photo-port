export default function Modal({ onClose, currentPhoto }) {
  const { name, category, description, index } = currentPhoto;
  console.log(name, category, index);
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={`./assets/large/${category}/${index}.jpg`} alt={category} />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
}
