export class FlightDTO {
  readonly pilot: string;
  readonly airplane: string;
  readonly destinationCity: string;
  readonly flightDate: Date;
}

/**
 * json example
 {
  "pilot": "John Doe",
  "airplane": "Boeing 747",
  "destinationCity": "New York",
  "flightDate": "2021-01-01T00:00:00.000Z"
 }
 */
