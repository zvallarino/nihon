class HiraganasController < ApplicationController

  def index
    hiraganas = Hiragana.all
    render json: hiraganas,status:200
  end 

  def soundcategories
    soundCats = Hiragana.soundCat
    render json: soundCats, status: :ok
  end

end
