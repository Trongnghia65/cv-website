import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";

import type { Cv } from "../types/cv";

interface Props {
  cv: Cv;
}

function MemberCard({ cv }: Props) {
  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <img src={cv.avatarUrl} alt={cv.fullName} className="member-image" />
      </div>

      <div className="member-content">
        <h3>{cv.fullName}</h3>

        <p className="member-job">{cv.jobTitle}</p>

        <div className="member-email">
          <Mail size={15} />

          <span>{cv.email}</span>
        </div>

        <Link to={`/cv/${cv.id}`} className="view-cv-button">
          <span>View CV</span>

          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}

export default MemberCard;
