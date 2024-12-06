import { CONTACT } from "../constants/index.js";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="text-4xl my-20 text-center">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="border-b" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
