const {Task} = require('../models/taskModels');

class TaskController {
  static async addTask(req, res) {
    try {
      const { title, description, status } = req.body;
      const newTask = new Task({ title, description, status });
      await newTask.save();
      return res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to add task' });
    }
  }

  static async getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
  }

  static async getTaskById(req, res) {
    const taskId = req.params.id;
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to retrieve task' });
    }
  }

  static async updateTaskById(req, res) {
    const taskId = req.params.id;
    const { title, description, status } = req.body;

    try {
      const task = await Task.findByIdAndUpdate(
        taskId,
        { title, description, status },
        { new: true }
      );

      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }

      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update task' });
    }
  }

  static async deleteTaskById(req, res) {
    const taskId = req.params.id;

    try {
      const task = await Task.findByIdAndDelete(taskId);

      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }

      return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete task' });
    }
  }



}

module.exports = {TaskController};


