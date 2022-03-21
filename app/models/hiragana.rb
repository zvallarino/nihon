class Hiragana < ApplicationRecord

  def self.soundCat
    soundCategory = self.all.pluck (:categoryHorz)
    soundCategory.uniq
end 

end
