function phoneNumberDirectory(phoneNumbers) {
  return new Map(phoneNumbers.map((entry) => entry.split(':')));
}

const phoneNumbers = [
  'John:123-456-7890',
  'Jane:987-654-3210',
  'Joe:555-555-5555',
];

module.exports = phoneNumberDirectory;
