// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PropertyService {}

// src/property/property.service.ts
import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import propertyRegistryAbi from './propertyRegistryAbi.json';

@Injectable()
export class PropertyService {
  private provider: ethers.providers.JsonRpcProvider;
  private contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider('YOUR_INFURA_OR_ALCHEMY_URL');
    this.contract = new ethers.Contract('YOUR_CONTRACT_ADDRESS', propertyRegistryAbi, this.provider);
  }

  async issue(data: any) {
    const signer = this.provider.getSigner();
    const contractWithSigner = this.contract.connect(signer);
    return await contractWithSigner.issueProperty(data.propertyId, data.location, data.ownerDetails, data.documents);
  }

  async update(data: any) {
    const signer = this.provider.getSigner();
    const contractWithSigner = this.contract.connect(signer);
    return await contractWithSigner.updateProperty(data.propertyId, data.updatedDetails);
  }

  async getProperty(propertyId: string) {
    return await this.contract.getProperty(propertyId);
  }
}
