import {Form, useLoaderData,} from 'react-router-dom';
import {getContact} from '../contacts';

export async function loader({params}) {
  const contact = await getContact(params.contactId);
  return {contact};
}

export default function Contact() {
  const {contact} = useLoaderData();
  // const contact = {
  //   first: "John",
  //   last: "Smit",
  //   avatar: "https://robohash.org/john.png?size=200x200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img 
          key={contact.avatar}
          src={
            contact.avatar || `https://robohash.org/${contact.id}.png?size=200x200`
          } 
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No name</i>
          )}{""}
          <Favorite contact={contact} />
        </h1>
        {contact.twitter && (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`} target="_blank" ></a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action='edit'>
            <button type="submit">Edit</button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(e) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({contact}) {
  const favorite = contact.favorite;

  return (
    <Form method="post" >
      <button 
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}