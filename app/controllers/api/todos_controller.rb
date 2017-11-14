
class Api::TodosController < Api::ApiController

  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def destroy
    @todo = Todo.find_by_id(params[:id])
    @todo.destroy!
    @todos = Todo.all
    render json: @todos
  end

  def update
    @todo = Todo.find_by_id(params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end




  private

  def todo_params
    parasm.require(:todo).permit(:title,:body,:done)
  end
end
