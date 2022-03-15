class CreateHiraganas < ActiveRecord::Migration[7.0]
  def change
    create_table :hiraganas do |t|
      t.string :character
      t.string :soundAlpha
      t.string :soundFile

      t.timestamps
    end
  end
end
