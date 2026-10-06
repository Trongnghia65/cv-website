import { Mail, Phone, MapPin } from "lucide-react";

import type { Cv } from "../types/cv";

interface Props {
  cv: Cv;
}

function ProfileHeader({ cv }: Props) {
  return (
    <section className="profile-header">
      <div className="profile-main">
        <img src={cv.avatarUrl} alt={cv.fullName} className="profile-avatar" />

        <div>
          <p className="profile-label">CURRICULUM VITAE</p>

          <h1>{cv.fullName}</h1>

          <h2>{cv.jobTitle}</h2>
        </div>
      </div>

      <div className="profile-contact">
        <a href={`mailto:${cv.email}`}>
          <Mail size={17} />

          <span>{cv.email}</span>
        </a>

        <a href={`tel:${cv.phone}`}>
          <Phone size={17} />

          <span>{cv.phone}</span>
        </a>

        <span>
          <MapPin size={17} />

          <span>{cv.address}</span>
        </span>
      </div>
    </section>
  );
}

export default ProfileHeader;
