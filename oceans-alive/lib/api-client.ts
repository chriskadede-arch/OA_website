import axios, { AxiosInstance } from 'axios';
import {
  submitContactForm,
  submitDonationForm,
  submitNewsletterForm,
  usesPhpForms,
} from '@/lib/php-forms';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${API_BASE_URL}/api`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Blog endpoints
  async getBlogs(page = 1, limit = 12, category?: string) {
    const params: any = { page, limit };
    if (category) params.category = category;
    const response = await this.client.get('/blog', { params });
    return response.data;
  }

  async getBlogBySlug(slug: string) {
    const response = await this.client.get(`/blog/${slug}`);
    return response.data;
  }

  async createBlog(data: any) {
    const response = await this.client.post('/blog', data);
    return response.data;
  }

  // Resources endpoints
  async getResources(page = 1, limit = 20, category?: string) {
    const params: any = { page, limit };
    if (category) params.category = category;
    const response = await this.client.get('/resources', { params });
    return response.data;
  }

  async getResourceById(id: string) {
    const response = await this.client.get(`/resources/${id}`);
    return response.data;
  }

  // Gallery endpoints
  async getGalleryItems(page = 1, limit = 24, type?: string) {
    const params: any = { page, limit };
    if (type) params.type = type;
    const response = await this.client.get('/gallery', { params });
    return response.data;
  }

  // Newsletter endpoints
  async subscribeNewsletter(email: string, name?: string) {
    if (usesPhpForms()) {
      return submitNewsletterForm({ email, name });
    }

    const response = await this.client.post('/newsletter/subscribe', {
      email,
      name,
    });
    return response.data;
  }

  // Donation endpoints
  async createDonationIntent(data: any) {
    if (usesPhpForms()) {
      const result = await submitDonationForm(data);
      return { data: { message: result.message } };
    }

    const response = await this.client.post('/donate/intent', data);
    return response.data;
  }

  // Contact endpoints
  async submitContact(data: any) {
    if (usesPhpForms()) {
      return submitContactForm(data);
    }

    const response = await this.client.post('/contact', data);
    return response.data;
  }

  // File upload
  async uploadFile(file: File, bucket: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucket', bucket);
    const response = await this.client.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }
}

export const apiClient = new ApiClient();
