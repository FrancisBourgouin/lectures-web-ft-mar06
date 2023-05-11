class MapsController < ApplicationController
  before_action :set_map, only: [:show, :update, :destroy]

  # GET /maps
  def index
    @maps = Map.all

    render json: @maps
  end

  # GET /maps/1
  def show
    render json: @map
  end

  # POST /maps
  def create
    @map = Map.new(map_params)

    if @map.save
      render json: @map, status: :created, location: @map
    else
      render json: @map.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /maps/1
  def update
    if @map.update(map_params)
      render json: @map
    else
      render json: @map.errors, status: :unprocessable_entity
    end
  end

  # DELETE /maps/1
  def destroy
    @map.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map
      @map = Map.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def map_params
      params.require(:map).permit(:title, :description, :latitude, :longitude)
    end
end
