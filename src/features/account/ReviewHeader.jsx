import { Icon } from "@iconify/react";
import ActionMenu from "../../components/ActionMenu";

function ReviewHeader({
  review,
  openMenuId,
  setOpenMenuId,
  setOpenEditModal,
  setOpenDeleteModal,
}) {
  const { gameName, platform, date, category, image } = review;
  const actions = [
    { label: "Edit", onClick: () => setOpenEditModal(true) },
    { label: "Delete", onClick: () => setOpenDeleteModal(true) },
  ];

  return (
    <section className="relative flex items-center gap-3">
      <img
        src={image}
        alt={gameName}
        className="rounded-lg w-24 h-24 object-cover"
      />

      <main>
        <h3 className="font-bold text-lg">{gameName}</h3>
        <p className="text-gray-500 text-sm">{platform}</p>
        <p className="text-gray-500 text-sm">Reviewed on {date}</p>
        <p className="mt-1 text-gray-600 text-sm italic">{category}</p>
      </main>

      <ActionMenu
        buttonIcon={
          <Icon icon="carbon:overflow-menu-vertical" width={26} height={26} />
        }
        actions={actions}
      />
    </section>
  );
}

export default ReviewHeader;
