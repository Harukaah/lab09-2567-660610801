import React from "react";

interface Props{
  year: number;
  fullName: string;
  studentId: string;
}

export default function Footer(props: Props) {
 
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
}
