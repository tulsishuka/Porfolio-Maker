export default function Contact({ contact = {} }) {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">contact</h2>
      <p className="text-gray-700 mb-2"> {contact.email}</p>
      <p className="text-gray-700 mb-2">{contact.phone}</p>
      <p className="text-gray-700">{contact.message}</p></section>
  )
}
