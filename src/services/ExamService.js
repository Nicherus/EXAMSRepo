import api from '../config/api';

class ExamService {

  async getDisciplines() {
    try {
      const { data } = await api.get('/disciplines');
      if (data) {
        return data;
      }
    } catch (e) {
      return null;
    }
  }

  async getProfessorsByDiscipline(id) {
    try {
      const { data } = await api.get('/disciplines/professors', {
        headers: {
          id,
        }
      });
      if (data) {
        return data;
      }
    } catch (e) {
      return null;
    }
  }

  async getTypes() {
    try {
      const { data } = await api.get('/exams-types');
      if (data) {
        return data;
      }
    } catch (e) {
      return null;
    }
  }

  async postExam(body) {
    try {
      const { data } = await api.post('/exams', body);
      if (data) {
        return data;
      }
    } catch (e) {
      return null;
    }
  }

}
export default new ExamService();
