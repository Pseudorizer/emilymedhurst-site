/** An icon component from `~icons/*` (unplugin-icons). */
export type IconComponent = (props: astroHTML.JSX.SVGAttributes) => astroHTML.JSX.Element;

export interface Tag {
	icon: IconComponent;
	text: string;
}
