export class Property {

	constructor(
		public id: number,
		public address: string,
		public tenants: number,
		public rent: number, 
		public bathrooms: number,
		public bedrooms: number,
		public type: string
		) {}

}