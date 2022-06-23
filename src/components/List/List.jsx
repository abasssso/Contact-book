import { useEffect } from "react";
import ContactCard from "../Card/Card";

const List = ({ getContacts, contacts, deleteContact }) => {
  useEffect(() => {
    getContacts();
  }, []);
  console.log(contacts);
  return (
    <div>
      {contacts.map(item => (
        <ContactCard key={item.id} item={item} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default List;
