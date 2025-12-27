export const mandatoryDisclosureQuery = `
*[_type == "mandatoryDisclosure"][0]{
  schoolName,
  affiliationNo,
  schoolCode,
  address,
  principal,
  email,
  contact,

  documents{
    affiliation{asset->{url}},
    noc{asset->{url}},
    buildingSafety{asset->{url}},
    fireSafety{asset->{url}},
    deo{asset->{url}},
    waterHealth{asset->{url}}
  },

  feeStructure{asset->{url}},
  academicCalendar{asset->{url}},
  pta{asset->{url}},

  classXResults[],
  classXIIResults[],

  totalTeachers,
  pgt,
  tgt,
  prt,
  teacherRatio,
  specialEducator,
  counsellor,

  campusArea,
  classrooms,
  labs,
  biologyLab,
  chemistryLab,
  physicsLab,
  mathsLab,
  computerLab1,
  computerLab2,
  internet,
  girlsToilets,
  boysToilets,
  inspectionVideo
}
`;
